package io.wowtech.managementtool.services;

import io.wowtech.managementtool.exceptions.ProjectIdentifierException;
import io.wowtech.managementtool.exceptions.ProjectNotFoundException;
import io.wowtech.managementtool.model.Backlog;
import io.wowtech.managementtool.model.Project;
import io.wowtech.managementtool.model.ProjectTask;
import io.wowtech.managementtool.repositories.BacklogRepository;
import io.wowtech.managementtool.repositories.ProjectRepository;
import io.wowtech.managementtool.repositories.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectTaskService {

    @Autowired
    private BacklogRepository backlogRepository;
    @Autowired
    private ProjectTaskRepository projectTaskRepository;

    @Autowired
    private ProjectRepository projectRepository;

    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask) {
        //Exceptions: Project not found
        try{
            //PTs to be added to a specific project, project != null, BL exists
            Backlog backlog = backlogRepository.findByProjectIdentifier(projectIdentifier);

            //Set the BL to PT
             projectTask.setBacklog(backlog);

             //We want our project sequence to be like: pro01, pro02,..
             Integer backlogSequence = backlog.getPTSequence();

             //Update the BL sequence
            backlogSequence++;
            backlog.setPTSequence(backlogSequence);

            //Add sequence to Project Task
            projectTask.setProjectSequence(projectIdentifier+"-"+backlogSequence);
            projectTask.setProjectIdentifier(projectIdentifier);

            //Initial priority when priority is null
            if(projectTask.getPriority()== null){
                projectTask.setPriority(4);
            }
            //Initial status when status is null
            if(projectTask.getStatus()=="" || projectTask.getStatus()==null){
                projectTask.setStatus("TODO");
            }

            return projectTaskRepository.save(projectTask);
        }catch (Exception e){
            throw new ProjectNotFoundException("Project Not Found.");
        }
    }

    public Iterable<ProjectTask>findBacklogById(String id){
        Project project = projectRepository.findByProjectIdentifier(id);
        if (project == null){
            throw  new ProjectNotFoundException("Project with ID: '"+id+"' not found.");
        }
        return projectTaskRepository.findByProjectIdentifierOrderByPriority(id);
    }

    public ProjectTask findProjectTaskByProjectSequence(String backlog_id, String pt_id){
        //Make sure we are searching on an existing Backlog
        Backlog backlog = backlogRepository.findByProjectIdentifier(backlog_id);
        if (backlog == null){
            throw  new ProjectNotFoundException("Project with ID: '"+backlog_id+"' not found.");
        }
        //make sure that our task exists
        ProjectTask projectTask = projectTaskRepository.findByProjectSequence(pt_id);
        if (projectTask == null){
            throw  new ProjectNotFoundException("Project Task '"+pt_id+"' not found.");
        }
        //make sure that the Backlog/Project Id in the path corresponds to the right project
        if(!projectTask.getProjectIdentifier().equals(backlog_id)){
            throw  new ProjectNotFoundException("Project Task '"+pt_id+"' not found in project '"+backlog_id+"'.");
        }
        return projectTaskRepository.findByProjectSequence(pt_id);
    }

    public ProjectTask updateByProjectSequence(ProjectTask updatedTask, String backlog_id, String pt_id){
        //Find existing project task
        // ProjectTask projectTask = projectTaskRepository.findByProjectSequence(pt_id);
        ProjectTask projectTask = findProjectTaskByProjectSequence(backlog_id, pt_id);
        //Update Project Task
        //Replace it with updated task
        projectTask = updatedTask;
        //Save Updated
        return projectTaskRepository.save(projectTask);
    }

    public void deleteProjectTaskByProjectSequence(String backlog_id, String pt_id){
        ProjectTask projectTask = findProjectTaskByProjectSequence(backlog_id, pt_id);
//        Backlog backlog = projectTask.getBacklog();
//        List<ProjectTask> pts = backlog.getProjectTasks();
//        pts.remove(projectTask);

        if(projectTask == null){
            throw new ProjectNotFoundException("Project Task '"+backlog_id+"' with Sequence '" +pt_id+"' not found.");
        }
        projectTaskRepository.delete(projectTask);
    }
}

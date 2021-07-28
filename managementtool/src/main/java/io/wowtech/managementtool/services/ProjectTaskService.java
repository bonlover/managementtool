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
            throw new ProjectNotFoundException("Project Not Found");
        }
    }

    public Iterable<ProjectTask>findBacklogById(String id){
        Project project = projectRepository.findByProjectIdentifier(id);
        if (project == null){
            throw  new ProjectNotFoundException("Project with ID: '"+id+"' does not exist");
        }
        return projectTaskRepository.findByProjectIdentifierOrderByPriority(id);
    }

}

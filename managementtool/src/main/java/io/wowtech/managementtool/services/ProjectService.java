package io.wowtech.managementtool.services;

import io.wowtech.managementtool.exceptions.ProjectIdentifierException;
import io.wowtech.managementtool.model.Backlog;
import io.wowtech.managementtool.model.Project;
import io.wowtech.managementtool.repositories.BacklogRepository;
import io.wowtech.managementtool.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;
    @Autowired
    private BacklogRepository backlogRepository;

    public Project saveOrUpdateProject(Project project){
        String identifier = project.getProjectIdentifier().toUpperCase();
        //logic
        try{
            project.setProjectIdentifier(identifier);
            if(project.getId() == null){
                Backlog backlog = new Backlog();
                project.setBacklog(backlog);
                backlog.setProject(project);
                backlog.setProjectIdentifier(identifier);

            }
            if (project.getId() != null){
                project.setBacklog(backlogRepository.findByProjectIdentifier(identifier));
            }
            return projectRepository.save(project);
        }
        catch (Exception  e) {
            throw new ProjectIdentifierException("Project Identifier '" +identifier + "' already exists." );
        }
    }

    public Project findByProjectIdentifier(String projectId){
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());
        if(project == null){
            throw new ProjectIdentifierException("Project Identifier '" + projectId.toUpperCase() + "' doesn't exists.");
        }
        return project;

    }

    public  Iterable<Project> findAllProjects(){
        return projectRepository.findAll();
    }

    public void deleteProjectByIdentifier(String projectId){
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());
        if(project == null){
            throw new ProjectIdentifierException("Cannot find Project with Identifier '" + projectId.toUpperCase() + "'.");
        }
        projectRepository.delete(project);
    }

}

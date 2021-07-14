package io.wowtech.managementtool.services;

import io.wowtech.managementtool.exceptions.ProjectIdentifierException;
import io.wowtech.managementtool.model.Project;
import io.wowtech.managementtool.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdateProject(Project project){
        //logic
        try{
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
            return projectRepository.save(project);
        }
        catch (Exception  e) {
            throw new ProjectIdentifierException("Project Identifier '" +project.getProjectIdentifier().toUpperCase() + "' already exists." );
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
}

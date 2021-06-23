package io.wowtech.managementtool.services;

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
        return projectRepository.save(project);
    }
}

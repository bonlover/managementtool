package io.wowtech.managementtool.repositories;

import io.wowtech.managementtool.model.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {
//    Project findByProjectIdentifier(String projectId);
    Project findByProjectIdentifier(String projectId);

}

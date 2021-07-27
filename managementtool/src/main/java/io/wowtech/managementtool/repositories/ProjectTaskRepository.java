package io.wowtech.managementtool.repositories;

import io.wowtech.managementtool.model.ProjectTask;
import jdk.jfr.Registered;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

@Registered
public interface ProjectTaskRepository extends CrudRepository<ProjectTask, Long> {
    List<ProjectTask> findByProjectIdentifierOrderByPriority(String id);
}

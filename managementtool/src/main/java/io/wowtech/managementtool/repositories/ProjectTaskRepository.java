package io.wowtech.managementtool.repositories;

import io.wowtech.managementtool.model.ProjectTask;
import jdk.jfr.Registered;
import org.springframework.data.repository.CrudRepository;

@Registered
public interface ProjectTaskRepository extends CrudRepository<ProjectTask, Long> {
}

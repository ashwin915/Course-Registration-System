package com.example.Course.Registration.System.repository;

import com.example.Course.Registration.System.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Repository
public interface CourseRepo extends JpaRepository<Course,String> {
}

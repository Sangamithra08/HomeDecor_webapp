package com.sangamithra.mithra.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sangamithra.mithra.model.User;
public interface UserRepository extends JpaRepository<User, String> {

    // Optional<User> existsByEmail(String email);
    boolean existsById(String id);

    Optional<User> findById(String id);

    void deleteById(String id);
}

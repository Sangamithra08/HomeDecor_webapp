package com.homedecor.home.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sangamithra.mithra.model.User;
import com.sangamithra.mithra.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public void saveUser(User user) {
        Optional<User> userExists = userRepository.findById(user.getId());
        if (userExists.isPresent())
            return;
        userRepository.save(user);
    }

    public User getUserById(String id) {
        boolean userExists = userRepository.existsById(id);
        if (userExists) {
            return userRepository.findById(id).get();
        }
        return new User();
    }

    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    public User updateUser(String id, User user) {
        Optional<User> userExists = userRepository.findById(id);
        if (userExists.isPresent()) {
            User existingUser = userExists.get();
            existingUser.setName(user.getName());
            existingUser.setEmail(user.getEmail());
            existingUser.setPassword(user.getPassword());
            return userRepository.save(existingUser);
        }
        return new User();
    }

    public String deleteUser(String id) {
        boolean userExists = userRepository.existsById(id);
        if (userExists) {
            userRepository.deleteById(id);
            return "User deleted successfully!";
        }
        return "Record not found with email id " + id;
    }

    public User updateUserBy(String id, User user) {
        Optional<User> userExists = userRepository.findById(id);
        return userExists.map(existingUser -> {
            Optional.ofNullable(user.getName()).ifPresent(existingUser::setName);
            Optional.ofNullable(user.getPassword()).ifPresent(existingUser::setPassword);
            return userRepository.save(existingUser);
        }).orElse(new User());
    }
}

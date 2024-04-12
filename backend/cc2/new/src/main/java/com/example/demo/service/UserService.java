package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    public User post(User user){
        return userRepository.save(user);
    }

    public List<User> sort(String field){
        Sort sort = Sort.by(Sort.Direction.ASC,field);
        return userRepository.findAll(sort);
    }
    public List<User> paging(int offset,int pageSize){
        Pageable pageable= PageRequest.of(offset, pageSize);
        return  userRepository.findAll(pageable).getContent();
    }
    public  List<User> getbyjpql(String name){
        return  userRepository.getbyjpql(name);
    }
}

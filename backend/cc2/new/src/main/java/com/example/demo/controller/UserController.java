package com.example.demo.controller;


import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/save")
    public ResponseEntity<?> post(@RequestBody User user){
        try {
            userService.post(user);
            return  new ResponseEntity<>("User registered successfully", HttpStatus.CREATED);
        }
        catch (Exception e){
            return  new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/sort/{field}")
    public ResponseEntity<?> sort(@PathVariable String field){
        try {

            return  new ResponseEntity<>(userService.sort(field), HttpStatus.OK);
        }
        catch (Exception e){
            return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/paging/{offset}/{pagesize}")
    public ResponseEntity<?> paging(@PathVariable int offset,@PathVariable int pagesize){
        try {

            return  new ResponseEntity<>(userService.paging(offset,pagesize), HttpStatus.OK);
        }
        catch (Exception e){
            return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/getbyjpql/{name}")
    public ResponseEntity<?> getbyjpql(@PathVariable String name){
        try {

            return  new ResponseEntity<>(userService.getbyjpql(name), HttpStatus.OK);
        }
        catch (Exception e){
            return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

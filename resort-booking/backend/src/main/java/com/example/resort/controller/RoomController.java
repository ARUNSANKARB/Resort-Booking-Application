package com.example.resort.controller;


import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.example.resort.repository.RoomRepository;
import com.example.resort.model.Room;


@RestController
@RequestMapping("/api/rooms")
@CrossOrigin
public class RoomController {
private final RoomRepository repo;
public RoomController(RoomRepository repo){ this.repo = repo; }


@GetMapping
public List<Room> all(){ return repo.findAll(); }


@GetMapping("/{id}")
public Room one(@PathVariable Long id){ return repo.findById(id).orElseThrow(); }
}
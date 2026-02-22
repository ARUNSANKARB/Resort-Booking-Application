package com.example.resort.controller;
import org.springframework.web.bind.annotation.*;
import com.example.resort.repository.BookingRepository;
import com.example.resort.model.Booking;


@RestController
@RequestMapping("/api/bookings")
@CrossOrigin
public class BookingController {
private final BookingRepository repo;
public BookingController(BookingRepository repo){ this.repo = repo; }


@PostMapping
public Booking create(@RequestBody Booking b){ return repo.save(b); }
}
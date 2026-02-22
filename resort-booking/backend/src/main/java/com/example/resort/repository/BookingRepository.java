package com.example.resort.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.resort.model.Booking;
public interface BookingRepository extends JpaRepository<Booking,Long> {}
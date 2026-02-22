package com.example.resort.model;


import jakarta.persistence.*;
import java.time.LocalDate;


@Entity
public class Booking {
@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
private Long roomId;
private String customerName;
private String customerEmail;
private LocalDate fromDate;
private LocalDate toDate;
// getters/setters
}
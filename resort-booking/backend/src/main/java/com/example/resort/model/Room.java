package com.example.resort.model;

import jakarta.persistence.*;

@Entity
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private Double pricePerNight;
    private String imageUrl;
    private Integer capacity;
    private String amenities;
    private Integer bedCount;

    // Constructors
    public Room() {}

    public Room(String name, String description, Double pricePerNight, String imageUrl, 
                Integer capacity, String amenities, Integer bedCount) {
        this.name = name;
        this.description = description;
        this.pricePerNight = pricePerNight;
        this.imageUrl = imageUrl;
        this.capacity = capacity;
        this.amenities = amenities;
        this.bedCount = bedCount;
    }

    // ========== GETTERS ==========
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public Double getPricePerNight() {
        return pricePerNight;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public String getAmenities() {
        return amenities;
    }

    public Integer getBedCount() {
        return bedCount;
    }

    // ========== SETTERS ==========
    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPricePerNight(Double pricePerNight) {
        this.pricePerNight = pricePerNight;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public void setAmenities(String amenities) {
        this.amenities = amenities;
    }

    public void setBedCount(Integer bedCount) {
        this.bedCount = bedCount;
    }
}

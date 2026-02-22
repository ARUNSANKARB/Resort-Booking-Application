package com.example.resort.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.resort.model.Room;
public interface RoomRepository extends JpaRepository<Room,Long> {}
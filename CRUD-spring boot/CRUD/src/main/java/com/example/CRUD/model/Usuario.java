/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.CRUD.model;
import jakarta.persistence.*;
/**
 *
 * @author canti
 */
@Entity
public class Usuario {
    @Id
    private long id;
    private String nombre;
    
    
    public Usuario(){}
    
    public Usuario(String nombre){
    this.nombre = nombre;
    }
    
    public long getId(){
    return id;
    }
    
    public void setId(long id){
    this.id=id;
    }
    
    public String getNombre(){
    return nombre;
    } 
    
    public void setNombre(String nombre){
    this.nombre=nombre;
    }
}

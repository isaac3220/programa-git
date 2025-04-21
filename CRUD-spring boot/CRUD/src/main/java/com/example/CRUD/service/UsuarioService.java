/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.CRUD.service;
import com.example.CRUD.model.Usuario;
import com.example.CRUD.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;
/**
 *
 * @author canti
 */
public class UsuarioService {
    private UsuarioRepository usuarioRepository;
    
    public List<Usuario> obtenertodos(){
    return usuarioRepository.findAll();
    }
    
     public Optional<Usuario> obtenerPorId(Long id) {
        return usuarioRepository.findById(id);
    }
     
    
    public Usuario guardar(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public void eliminar(Long id) {
        usuarioRepository.deleteById(id);
    }
}

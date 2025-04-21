/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package evidencia1;
import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;
/**
 *
 * @author canti
 */
public class Evidencia1 {
    private static final String url = "jdbc:mysql://localhost:3306/isaac";
    private static final String user = "root";
    private static final String pass ="isaac";
    
    public static void main(String[] args){
        
        leerDatos();
        insertar("polo");
        actualizar(7,"juancho");
        eliminar(10);
    }
    
    
   public static void leerDatos(){
    String leer = "select*from usuario";
   
     try(Connection con = DriverManager.getConnection(url,user,pass);
         Statement st = con.createStatement();
         ResultSet rs =st.executeQuery(leer)){
         while(rs.next()){
         System.out.println("id: " + rs.getInt("id_user") + "nombre: " + rs.getString("nombre"));
   }
  }catch(SQLException e ){
     e.printStackTrace();
            }
   }
   
   public static void insertar(String nombre){
   String insert = "insert into usuario (nombre)value(?)";
   
   try(Connection con =DriverManager.getConnection(url,user,pass);
           PreparedStatement st =con.prepareStatement(insert)){
   st.setString(1, nombre);
   st.executeUpdate();
   System.out.println("usuario insertado");
   }catch(SQLException e){
   e.printStackTrace();
   }
   
   }
           
   public static void actualizar(int id, String nombre){
    String upd = "UPDATE usuario SET nombre =? WHERE id_user = ? ";
  
     try(Connection con = DriverManager.getConnection(url,user,pass);
          PreparedStatement st = con.prepareStatement(upd)){
          st.setString(1, nombre);
          st.setInt(2, id);
          st.executeUpdate();
          System.out.println("usuario actualizado");
     }catch(SQLException e){
      e.printStackTrace();
   }
 }
   
   
   
     public static void eliminar(int id){
       String delete = "DELETE FROM usuario WHERE id_user = ?";
  
        try(Connection con = DriverManager.getConnection(url,user,pass);
            PreparedStatement st = con.prepareStatement(delete)){
            st.setInt(1, id);
            st.executeUpdate();
            System.out.println("usuario eliminado");
         }catch(SQLException e ){
           e.printStackTrace();
    }
  }
   
}


      
  


    


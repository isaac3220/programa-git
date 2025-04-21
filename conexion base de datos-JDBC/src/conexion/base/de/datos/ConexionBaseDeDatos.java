/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package conexion.base.de.datos;
import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;
/**
 *
 * @author canti
 */
public class ConexionBaseDeDatos {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        String url = "jdbc:mysql://localhost:3306/isaac";
        String user = "root";
        String pass = "isaac";
        Connection con;
        Statement st;
        ResultSet rs;
        
        try {
            con =DriverManager.getConnection(url,user,pass);
            st = con.createStatement();
            rs =st.executeQuery("select*from usuario");
            rs.next();
       do{
         System.out.println(rs.getInt("id_user" + rs.getString("nombre")));
         }while(rs.next());
         
        } catch (SQLException ex) {
            Logger.getLogger(ConexionBaseDeDatos.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(ConexionBaseDeDatos.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
}

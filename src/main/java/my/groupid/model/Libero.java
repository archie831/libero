package my.groupid.model;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * Created by JPMC-PC15 on 29/06/2017.
 */

@Entity
public class Libero {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotEmpty(message = "Postcode should not be empty.")
     public String postcode;


    @NotNull(message = "Please select yes or no.")
    @NotEmpty(message = "Please select yes or no.")
    public String yesorno;


    @Size(min=2, message = "Should be atleast 2 characters.")
    @NotNull(message = "First name should not be empty.")
    @NotEmpty (message = "First name should not be empty")
    public  String firstname;


    @NotNull(message = "Last name should not be empty.")
    @NotEmpty (message = "Last name should not be empty.")
    @Size(min=2, message = "Should be atleast 2 characters.")
    public String lastname;


    @NotNull(message = "Email should not be empty.")
    @NotEmpty (message = "Email should not be empty")
    public String email;

    @NotEmpty(message = "Mobile number should not be empty.")
    public String mobilenumber;



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPostcode() {
        return postcode;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }

    public String getMobilenumber() {
        return mobilenumber;
    }

    public void setMobilenumber(String mobilenumber) {
        this.mobilenumber = mobilenumber;
    }

    public String getYesorno() {
        return yesorno;
    }

    public void setYesorno(String yesorno) {
        this.yesorno = yesorno;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }



}

package my.groupid.controllers;

import my.groupid.model.Libero;
import my.groupid.model.LiberoRepository;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.IOException;
import java.io.PrintWriter;
import java.security.Principal;
import java.util.List;

/**
 * Created by JPMC-PC15 on 06/07/2017.
 */



@Controller
public class LiberoProjectController {


    private LiberoRepository liberoRepository;

     @Autowired
     public LiberoProjectController(LiberoRepository liberoRepository){
         this.liberoRepository = liberoRepository;
     }


     //============================================================================
     /**NOTES:
      *
      * Homepage (/liberoProject)
      * show main page or the libero page
      * */
    @RequestMapping(value = "/liberoProject", method = RequestMethod.GET)
    public String loadLibero(){
        return "liberoProject/index";
    }


    //==================== Saving input data from Form ===========================
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public void saveLiberoInput(@ModelAttribute @Valid Libero libero,
                                BindingResult bindingResult,
                                HttpServletResponse response
                               ) throws IOException {

        JSONObject success = new JSONObject();
        JSONObject error = new JSONObject();
        JSONObject obj = new JSONObject();


        /**NOTES:
         *
         *  Tracing valid input &
         *  Setting Error Message event
         * */
        if(!bindingResult.hasErrors()) {
            success.put("postcode", libero.getPostcode());
            success.put("garbage separation and recycling?", libero.getYesorno());
            success.put("firstname", libero.getFirstname());
            success.put("lastname", libero.getLastname());
            success.put("email", libero.getEmail());
            success.put("mobilenumber", libero.getMobilenumber());
            obj.put("success", success);

            liberoRepository.save(libero);

        }else{
            List<FieldError> errors = bindingResult.getFieldErrors();

            for (FieldError fieldError : errors) {
                error.put(fieldError.getField() , fieldError.getDefaultMessage());

            }
            obj.put("errors", error);
        }
        PrintWriter pw = response.getWriter();
        //System.out.println("This is the ref var " + pw   );
        response.setContentType("application/json");
        pw.println(obj);

        //System.out.println(obj);
    }

    //=============== Accessing Admin/User event (able to Update/Delete data) ================
    /**NOTES:
     *
     * Delete/Update/Show properties for Admin access
     * Update/Show property for User access
     * Show data property for Visitor access
     * */


    @GetMapping("/currentUser")
    public @ResponseBody Principal currentUser(Principal principal){
        return principal;
    }


    @ModelAttribute("currentUser")
    public Principal user(Principal principal){
        return principal;
    }


    @RequestMapping(value = "/showAll", method = RequestMethod.GET)
    public ModelAndView showLiberoData(ModelAndView modelAndView, Principal principal){

       modelAndView.addObject("messages", liberoRepository.findAll());
        if(principal!=null) modelAndView.addObject("logged_in",  true);

        modelAndView.setViewName("liberoProject/showAll");

        return modelAndView;
    }

    //============================= Back-End edit data event ===================================
    /**NOTES:
     * Find ID to update data;
     * Save updated data event
     * */

    @RequestMapping (value = "edit/{id}", method = RequestMethod.GET)
    public ModelAndView viewLiberoRecord(ModelAndView modelAndView, @PathVariable long id){

        modelAndView.addObject("user", liberoRepository.findOne(id));

        modelAndView.setViewName("liberoProject/edit");
        return modelAndView ;
    }


    @RequestMapping (value = "update/{id}", method = RequestMethod.POST)
    public void updateLiberoRecord( Libero libero,
                                   HttpServletResponse response,
                                   @PathVariable long id,
                                   @RequestParam String postcode,
                                   @RequestParam String yesorno,
                                   @RequestParam String firstname,
                                   @RequestParam String lastname,
                                   @RequestParam String mobilenumber,
                                   @RequestParam String email) throws IOException {

        libero = liberoRepository.findOne(id);
        libero.setPostcode(postcode);
        libero.setYesorno(yesorno);
        libero.setFirstname(firstname);
        libero.setLastname(lastname);
        libero.setMobilenumber(mobilenumber);
        libero.setEmail(email);
        liberoRepository.save(libero);

        JSONObject obj = new JSONObject();
        obj.put("postcode", libero.getPostcode());
        obj.put("garbage separation and recycling?", libero.getYesorno());
        obj.put("firstname", libero.getFirstname());
        obj.put("lastname", libero.getLastname());
        obj.put("email", libero.getEmail());
        obj.put("mobilenumber", libero.getMobilenumber());

        response.setContentType("application/json");

        PrintWriter pw = response.getWriter();

        pw.println(obj);
    }

    //============================= Back-End delete data event ===================================
    /**NOTES:
     *
     * Delete data form database
     */
    @RequestMapping(value = "delete/{id}", method = RequestMethod.GET)
    public void deleteLiberoRecord(@PathVariable long id, HttpServletResponse response) throws  IOException{

        liberoRepository.delete(id);

        PrintWriter pw = response.getWriter();
        response.setContentType("application/json");
        pw.println("{ \"delete\" : \"success\"}");
    }
}


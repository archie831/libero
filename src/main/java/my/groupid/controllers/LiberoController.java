package my.groupid.controllers;

import org.json.simple.JSONObject;
        import my.groupid.model.Libero;
        import my.groupid.model.LiberoRepository;

        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.stereotype.Controller;
        import org.springframework.validation.BindingResult;
        import org.springframework.web.bind.annotation.*;
        import org.springframework.web.servlet.ModelAndView;
        import org.thymeleaf.spring4.webflow.view.AjaxThymeleafView;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
        import javax.validation.Valid;
        import java.io.IOException;
        import java.io.PrintWriter;
        import java.io.Writer;
import java.util.List;

/**
 * Created by JPMC-PC15 on 28/06/2017.
 */
/*
@Controller
public class LiberoController {

    private LiberoRepository liberoRepository;

    @Autowired
    public LiberoController(LiberoRepository liberoRepository){
        this.liberoRepository = liberoRepository;
    }

    @RequestMapping(value = "/home", method = RequestMethod.GET)
    public String loadLibero(){
        return "libero/index";
    }


/*

            if(name == ""){
                error.put("name","Name should not be empty.");
            }else{
                success.put("name",name);
            }

            if(username == ""){
                error.put("username","Username should not be empty.");
            }else{
                success.put("username",username);
            }

            if(password == ""){
                error.put("password","Password should not be empty.");
            }else{
                success.put("password",password);
            }

            JSONObject obj = new JSONObject();
            obj.put("success", success);
            obj.put("error", error);


            PrintWriter pw = response.getWriter();
            pw.println(obj);

        }
    }
    */

/*
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public void saveLiberoInput(@ModelAttribute @Valid Libero libero,
                                        HttpServletResponse response,
                                        BindingResult bindingResult) throws IOException {

        liberoRepository.save(libero);

        JSONObject obj = new JSONObject();
            obj.put("id",libero.getId());
            obj.put("name",libero.getName());
            obj.put("username",libero.getUsername());
            obj.put("password",libero.getPassword());


        response.setContentType("application/json");

        PrintWriter pw = response.getWriter();

        pw.println(obj);
    }

    @RequestMapping(value = "/showAll", method = RequestMethod.GET)
    public ModelAndView showLiberoData(ModelAndView modelAndView){

        modelAndView.addObject("messages", liberoRepository.findAll());

        modelAndView.setViewName("libero/showAll");

        return modelAndView;
    }

    @RequestMapping (value = "edit/{id}", method = RequestMethod.GET)
    public ModelAndView viewLiberoRecord(ModelAndView modelAndView, @PathVariable long id){

        modelAndView.addObject("user", liberoRepository.findOne(id));

        modelAndView.setViewName("libero/edit");
        return modelAndView;
    }

    @RequestMapping (value = "update/{id}", method = RequestMethod.POST)
    public void updateLiberoRecord(@ModelAttribute @Valid Libero libero,
                                           HttpServletResponse response,
                                           ModelAndView modelAndView,
                                           @PathVariable long id,
                                           @RequestParam String username,
                                           @RequestParam String name,
                                           @RequestParam String password
                                           ) throws IOException {

        libero = liberoRepository.findOne(id);
        libero.setName(name);
        libero.setUsername(username);
        libero.setPassword(password);
        liberoRepository.save(libero);

        JSONObject obj = new JSONObject();
        obj.put("username",libero.getUsername());
        obj.put("name",libero.getName());
        obj.put("password",libero.getPassword());


        response.setContentType("application/json");

        PrintWriter pw = response.getWriter();

        pw.println(obj);


    }



    @RequestMapping(value = "delete/{id}", method = RequestMethod.GET)
    public void deleteLiberoRecord(@PathVariable long id){

        liberoRepository.delete(id);
    }

/*
    @RequestMapping(value = "/showAll", method= RequestMethod.GET)
    public String getData(){
        return "libero/showAll";
    }
    @ModelAttribute("showAll")
    public List<Libero>messages(){
        return liberoRepository.findAll();
    }


   */


/*
}
*/
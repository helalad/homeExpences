package perso.homeExpences;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserControler {
    @RequestMapping(value = "/checkUser", method = RequestMethod.GET)
    public boolean CheckUser(){
        return true;
    }
}

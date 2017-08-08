package tests;

import helpers.Helpers;
import org.hibernate.boot.model.source.internal.hbm.Helper;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.Mockito;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

/**
 * Created by JPMC-PC15 on 12/07/2017.
 */
public class HelpersTest {

    @Mock
    Helpers helpers;

    @Before
    public void doBeforeTest(){
        helpers = Mockito.mock(Helpers.class);
        when(helpers.add(10, 10)).thenReturn(20);
        //when(helpers.fibGenerator(10)).thenReturn(new int[] {1,1,2,3,5,8,13,21,34,55});
    }

    @Test
    public void addTest(){
        Helpers testObjects = new Helpers();
        assertEquals(20, helpers.add(10,10));
    }

    @Test
    public void fibGeneratorTest(){
        Helper testObjects = new Helper();
       //assertEquals();
    }


}

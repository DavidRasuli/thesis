package Insert;

import DataModel.Address;
import DbUtil.DataAccess;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class InsertAddress implements RequestHandler<Address, String> {



    public static void main(String[] args)
    {
        Address address = new Address(124,"Street Main","Street Alt","Tel Aviv","12345","Bleh","Israel");
        DataAccess dataAccess = new DataAccess();
        dataAccess.insert(address);
    }


    public String handleRequest(Address address, Context context) {

        try
        {
            DataAccess dataAccess = new DataAccess();
            long id = dataAccess.insert(address);
            return String.format("Hello Address with id : ",id);
        }
        catch (Exception ex)
        {
            return String.format("Bad %s.", "Bad : "+ ex.getMessage());
        }
    }
}


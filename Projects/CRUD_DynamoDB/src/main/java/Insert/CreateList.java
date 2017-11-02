package Insert;

import DataModel.Address;
import DataModel.ShoppingList;
import DbUtil.DataAccess;
import Requests.CreateListRequest;
import com.amazonaws.services.dynamodbv2.document.Item;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

import java.util.ArrayList;

public class CreateList implements RequestHandler<CreateListRequest, String> {


    public static void main(String[] args)
    {
        CreateListRequest listRequest = new CreateListRequest(123,new ArrayList<Long>(),new ArrayList<Long>(),"some shopping list");
        CreateList createList = new CreateList();
        createList.handleRequest(listRequest, null);
    }

    @Override
    public String handleRequest(CreateListRequest request, Context context) {
       try {
           DataAccess dataAccess = new DataAccess();

           Item shopper = dataAccess.getItem(request.getShopperId(),"Participants");
           if(shopper == null)
           {
               throw new Exception("No shopper with Id : " + request.getShopperId());
           }

           ShoppingList shoppingList = new ShoppingList(123, request.getShopperId(), "Shopping List 1", true, request.getParticipantIds(), request.getItemInListIds());

           long id = dataAccess.insert(shoppingList);
           return String.format("Hello Address with id : ", id);
       }
        catch (Exception ex) {
            return String.format("Bad %s.", "Bad : " + ex.getMessage());
        }
    }
}

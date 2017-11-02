package DbUtil;

import DataModel.Address;
import DataModel.ShoppingList;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.document.DynamoDB;
import com.amazonaws.services.dynamodbv2.document.Item;
import com.amazonaws.services.dynamodbv2.document.Table;

import java.util.Arrays;
import java.util.HashSet;

public class DataAccess {
    //TODO :
    // 1.Singleton?
    // 2.How in which part is a connection opens and closes?
    private DynamoDB getConnectionObj()
    {
        AmazonDynamoDB client = AmazonDynamoDBClientBuilder.standard()
                .withRegion(Regions.US_EAST_1)
                .build();

        DynamoDB dynamoDB = new DynamoDB(client);

        return dynamoDB;
    }

    //TODO :
    //Consider Unit of Work Pattern for each POJO.
    public long insert(Address address)
    {

        DynamoDB dynamoDB = getConnectionObj();

        Table table = dynamoDB.getTable("Addresses");

        //address = new Address(123,"Street Main","Street Alt","Tel Aviv","12345","Bleh","Israel");

        try {

            Item item = new Item().withPrimaryKey("ID", address.getId())
                    .withString("CreationDate", address.getCreationDate().toString())
                    .withStringSet("Address", new HashSet<String>(Arrays.asList(address.getStreet1(), address.getStreet2())))
                    .withString("City",address.getCity())
                    .withString("ZipCode",address.getZipCode())
                    .withString("State",address.getState())
                    .withString("Country", address.getCountry());

            table.putItem(item);
            return item.getLong("ID");
        }
        catch (Exception e) {
            System.err.println("Create items failed.");
            System.err.println(e.getMessage());
            throw e;
        }
    }

    public long insert(ShoppingList shoppingList)
    {
        DynamoDB dynamoDB = getConnectionObj();

        Table table = dynamoDB.getTable("ShoppingLists");

        try {

            Item item = new Item().withPrimaryKey("ID", shoppingList.getID())
                    .withString("CreationDate", shoppingList.getName())
                    .withNumber("ShopperId",shoppingList.getShopperId())
                    .withString("creationDate",shoppingList.getCreationDate().toString())
                    .withBoolean("IsActive",shoppingList.isActive())
                    .withList("ParticipantIds", shoppingList.getParticipantIds())
                    .withList("ItemInListIds", shoppingList.getItemInListIds());

            table.putItem(item);
            return item.getLong("ID");
        }
        catch (Exception e) {
            System.err.println("Create items failed.");
            System.err.println(e.getMessage());
            throw e;
        }
    }

    public Item getItem(long id,String tableName)
    {
        DynamoDB dynamoDB = getConnectionObj();

        Table table = dynamoDB.getTable(tableName);

        Item item = table.getItem("ID",id);

        return item;
    }
}

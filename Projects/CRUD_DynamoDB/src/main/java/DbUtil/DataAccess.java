package DbUtil;

        import DataModel.Address;
        import DataModel.Participant;
        import DataModel.ShoppingList;
        import com.amazonaws.regions.Regions;
        import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
        import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
        import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
        import com.amazonaws.services.dynamodbv2.document.*;
        import com.amazonaws.services.dynamodbv2.document.spec.GetItemSpec;

        import java.util.Arrays;
        import java.util.HashSet;

public final class DataAccess {

    private static volatile DynamoDBMapper instance = null;

    public static DynamoDBMapper getInstance() {
        if (instance == null) {
            synchronized(DataAccess.class) {
                if (instance == null) {
                    AmazonDynamoDB client = AmazonDynamoDBClientBuilder.standard()
                            .withRegion(Regions.US_EAST_1)
                            .build();
                    instance = new DynamoDBMapper(client);
                }
            }
        }
        return instance;
    }
    //TODO :
    /*

    // 1.Singleton?
    // 2.How in which part is a connection opens and closes?
    public DynamoDBMapper getMapper()
    {
        AmazonDynamoDB client = AmazonDynamoDBClientBuilder.standard()
                .withRegion(Regions.US_EAST_1)
                .build();

        DynamoDBMapper mapper = new DynamoDBMapper(client);

        return mapper;
    }

    //TODO :
    //Consider Unit of Work Pattern for each POJO.
    public long insert(Address address)
    {

        DynamoDBMapper mapper = getMapper();


        //address = new Address(123,"Street Main","Street Alt","Tel Aviv","12345","Bleh","Israel");

        try {

            mapper.save(address);

            Item item = new Item().withPrimaryKey("ID", address.getId())
                    .withString("CreationDate", address.getCreationDate().toString())
                    .withStringSet("Address", new HashSet<String>(Arrays.asList(address.getStreet1(), address.getStreet2())))
                    .withString("City",address.getCity())
                    .withString("ZipCode",address.getZipCode())
                    .withString("State",address.getState())
                    .withString("Country", address.getCountry());

            table.putItem(item);
            return item.getLong("ID");

            return 1;
        }
        catch (Exception e) {
            System.err.println("Create items failed.");
            System.err.println(e.getMessage());
            throw e;
        }
    }

    public long insert(ShoppingList shoppingList)
    {
        DynamoDBMapper mapper = getMapper();

        try {
            mapper.save(shoppingList);


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

            return 1;
        }
        catch (Exception e) {
            System.err.println("Create items failed.");
            System.err.println(e.getMessage());
            throw e;
        }
    }

    public Participant getItem(Integer id)
    {
        DynamoDBMapper mapper = getMapper();

        Participant item = mapper.load(Participant.class,id);

        return item;
    }
    */
}

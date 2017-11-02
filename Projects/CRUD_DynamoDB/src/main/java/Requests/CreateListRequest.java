package Requests;

import java.util.ArrayList;

public class CreateListRequest {

    private long shopperId;

    private ArrayList<Long> participantIds;

    private ArrayList<Long> itemInListIds;

    private String name;

    public CreateListRequest(long shopperId, ArrayList<Long> participantIds, ArrayList<Long> itemInListIds, String name) {
        this.shopperId = shopperId;
        this.participantIds = participantIds;
        this.itemInListIds = itemInListIds;
        this.name = name;
    }

    public long getShopperId() {
        return shopperId;
    }

    public void setShopperId(long shopperId) {
        this.shopperId = shopperId;
    }

    public ArrayList<Long> getParticipantIds() {
        return participantIds;
    }

    public void setParticipantIds(ArrayList<Long> participantIds) {
        this.participantIds = participantIds;
    }

    public ArrayList<Long> getItemInListIds() {
        return itemInListIds;
    }

    public void setItemInListIds(ArrayList<Long> itemInListIds) {
        this.itemInListIds = itemInListIds;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

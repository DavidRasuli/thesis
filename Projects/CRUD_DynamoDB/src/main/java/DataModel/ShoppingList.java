package DataModel;


import DbUtil.DataAccess;

import java.util.ArrayList;
import java.util.Date;

//TODO : Consider ID Generator
public class ShoppingList{

	private long ID;

	private long ShopperId;

	private Date endedAt;

	private Date creationDate;

	private String name;

	public ShoppingList(long ID, long shopperId,  String name, boolean isActive, ArrayList<Long> participantIds, ArrayList<Long> itemInListIds) {
		this.ID = ID;
		ShopperId = shopperId;
		this.name = name;
		IsActive = isActive;
		this.participantIds = participantIds;
		ItemInListIds = itemInListIds;
	}

	private int StoreId;

	private boolean IsActive;

	private ArrayList<Long> participantIds;

	public ArrayList<Long> getParticipantIds() {
		return participantIds;
	}

	public ArrayList<Long> getItemInListIds() {
		return ItemInListIds;
	}

	private ArrayList<Long> ItemInListIds;

	public long getID() {
		return ID;
	}

	public long getShopperId() {
		return ShopperId;
	}

	public void setShopperId(long shopperId) {
		ShopperId = shopperId;
	}

	public Date getEndedAt() {
		return endedAt;
	}

	public void setEndedAt(Date endedAt) {
		this.endedAt = endedAt;
	}

	public Date getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getStoreId() {
		return StoreId;
	}

	public void setStoreId(int storeId) {
		StoreId = storeId;
	}

	public boolean isActive() {
		return IsActive;
	}

	public void setActive(boolean active) {
		IsActive = active;
	}

}

package DataModel;

import java.util.Date;

public class NotificationsLog {

	private long ID;

	private long listId;

	private long notifyToUserId;

	private Date notificationDate;

	private Date creationDate;

	private String notificationMessege;

	/**
	 * failed, pending, success, etc
	 */
	private String notificationStatus;

}

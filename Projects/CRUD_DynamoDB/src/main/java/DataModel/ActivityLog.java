package DataModel;

import java.time.LocalDateTime;

public class ActivityLog {

	private long ID;

	private LocalDateTime creationDate;

	private String logTypeByEntity;

	/**
	 * Invite/Remove/Add/Delete Participant or Item, finish shopping event, etc
	 *
	 */
	private LocalDateTime action;

}

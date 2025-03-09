import time
from datetime import datetime, timedelta

def daily_countdown(target_hour, target_minute=0, target_second=0):
    """Counts down to a specific time every day."""
    
    while True:
        # Get the current time
        now = datetime.now()
        
        # Define the target time for today
        target_time = now.replace(hour=target_hour, minute=target_minute, second=target_second, microsecond=0)

        # If target time has already passed today, set it for tomorrow
        if now > target_time:
            target_time += timedelta(days=1)
        
        # Calculate remaining time
        remaining_time = target_time - now
        total_seconds = int(remaining_time.total_seconds())

        while total_seconds > 0:
            mins, secs = divmod(total_seconds, 60)
            hours, mins = divmod(mins, 60)
            timer = f"{hours:02d}:{mins:02d}:{secs:02d}"
            
            print(f"Countdown to {target_time.strftime('%H:%M:%S')}: {timer}", end="\r")
            time.sleep(1)
            total_seconds -= 1
        
        print("\n🚀 Time's up! The daily event has started!")

        # Wait a short time before the next countdown starts
        time.sleep(10)

# Example: Countdown to 9:00 AM every day
daily_countdown(9, 0, 0)

import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  Popover,
} from "@mui/material";
import { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";

const notifications = [
  { id: 1, text: "New restaurant added", date: "2 hour ago", isNew: true },
  { id: 2, text: "New event added", date: "2 hour ago", isNew: false },
  { id: 3, text: "New event added", date: "30 July 2025", isNew: false },
  {
    id: 4,
    text: `Restaurant “Dav & Buster’s” is now published & online.`,
    date: "30 July 2025",
    isNew: false,
  },
];

const Notification = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
        }}
      >
        {/* onClick={handleClick} */}
        <IconButton>
          <NotificationsIcon sx={{ color: "#64748B" }} />
        </IconButton>
        <Box
          sx={{
            position: "absolute",
            top: -5,
            right: -5,
            borderRadius: "50%",
            backgroundColor: "#AD1003",
            width: 20,
            height: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #fff",
            fontSize: "12px",
            color: "#fff",
          }}
        >
          5
        </Box>
      </Box>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Box
          sx={{
            width: 320,
            maxHeight: 420,
            border: "1px solid #7D7D7D",
            bgcolor: "#111",
            color: "#fff",
            borderRadius: "4px",
            boxShadow: "none",
            py: 2,
            px: 0,
            overflowY: "auto",
            scrollbarWidth: "none",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2,
              mb: 2,
            }}
          >
            <Typography variant="subtitle1" fontWeight={600}>
              Notification
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#FF6600", cursor: "pointer", fontWeight: 500 }}
            >
              Mark as all read
            </Typography>
          </Box>

          {/* Notifications List */}
          <List sx={{ px: 0 }}>
            {notifications.map((notif, index) => (
              <Box key={notif.id}>
                <ListItem
                  alignItems="flex-start"
                  sx={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    px: 2,
                    py: 1,
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: notif.isNew ? 600 : 400,
                      color: notif.isNew ? "#FF6600" : "#fff",
                    }}
                  >
                    {notif.text}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#aaa", mt: 0.5, fontSize: "12px" }}
                  >
                    {notif.date}
                  </Typography>
                </ListItem>
                {/* Divider (except last item) */}
                {index < notifications.length - 1 && (
                  <Box
                    sx={{
                      width: "100%",
                      height: "1px",
                      bgcolor: "#333",
                      mx: 0,
                    }}
                  />
                )}
              </Box>
            ))}
          </List>
        </Box>
      </Popover>
    </Box>
  );
};

export default Notification;

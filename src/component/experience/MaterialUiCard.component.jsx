import {
  Card,
  CardContent,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const MaterialUICarousel = (props) => {
  const { id, jobTitle, startDate, endDate, company, description } = props.item;
  return (
    <Card
      key={id}
      sx={{
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardContent>
        <Typography sx={{ textAlign: "center" }} variant="h5" component="div">
          {jobTitle}
        </Typography>
        <Typography sx={{ textAlign: "center" }} variant="h5">
          {startDate} - {endDate}
        </Typography>
        <Typography variant="h5" sx={{ textAlign: "center" }}>{company}</Typography>
        <Container className="summary-lines">
          <List className="summary-list">
            {description.map((line, index) => {
              return (
                <ListItem key={index}>
                  <div>{line}</div>
                </ListItem>
              );
            })}
          </List>
        </Container>
      </CardContent>
    </Card>
  );
};

export default MaterialUICarousel;

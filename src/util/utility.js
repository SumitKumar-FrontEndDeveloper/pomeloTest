export const formatDate = (timeStamp) => {
  var date = new Date(parseInt(timeStamp));
  var monthNames = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var monthName = monthNames[date.getMonth()];
  var dateDay = date.getDate();
  var year = date.getFullYear();
  var dateString = `${dateDay} ${monthName} ${year}`;
  return dateString;
};

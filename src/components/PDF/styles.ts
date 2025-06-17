import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#333",
    backgroundColor: "#fdfdfd",
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    color: "#1976d2",
    fontWeight: "bold",
  },
  section: {
    marginBottom: 12,
  },
  label: {
    fontSize: 10,
    color: "#777",
    marginBottom: 2,
    textTransform: "uppercase",
  },
  value: {
    fontSize: 13,
    fontWeight: 500,
    marginBottom: 6,
  },
  row: {
    marginBottom: 10,
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    borderTopStyle: "solid",
  },
  bold: {
    fontWeight: "bold",
  },
});

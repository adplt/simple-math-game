const background = {
  flex: 1,
};

const title = {
  textAlign: 'center',
  margin: 20,
  color: 'black'
};

export default {
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    margin: 40,
    opacity: 0.75,
    borderRadius: 30,
  },
  header: {
    ...title,
    fontSize: 40,
  },
  footer: {
    ...title,
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    margin: 20
  },
  background,
  content: {
    ...background,
    textAlign: 'center'
  }
};

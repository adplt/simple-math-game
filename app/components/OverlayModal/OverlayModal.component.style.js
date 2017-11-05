const halfWidth = {
  margin: 10,
  flex: 1,
};

export default {
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    height: 100
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: 'black',
    paddingVertical: 20
  },
  close: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20
  },
  row: {
    flexDirection: 'row'
  },
  halfWidthLeft: [halfWidth, {textAlign: 'left'}],
  halfWidthRight: [halfWidth, {textAlign: 'right'}],
  content: {
    margin: 20
  }
};

import React from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type TodoItem = {
  id: number;
  todo: string;
};

type TableProps = {
  data: TodoItem[];
  onActionPress: (id: number) => void;
};

const Table: React.FC<TableProps> = ({ data, onActionPress }) => {
  const renderItem = ({ item, index }: { item: TodoItem; index: number }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{index + 1}</Text>
      <Text style={styles.cell}>{item.todo}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onActionPress(item.id)}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>S.No</Text>
        <Text style={styles.header}>Todo</Text>
        <Text style={styles.header}>Action</Text>
      </View>
      {data.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No tasks available</Text>
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    width:"100%"
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#ddd',
    padding: 10,
    marginBottom: 5,
  },
  header: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#13A49D',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
  },
  emptyContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },

});

export default Table;

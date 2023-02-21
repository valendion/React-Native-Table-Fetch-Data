import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {DataTable} from 'react-native-paper'
import {titleTable} from '../constans/constans'

const TableTitle = () => {
   return (
      <View>
         {titleTable.map((title, index) => (
            <DataTable.Title key={index} textStyle={styles.headerTextTable}>
               {'$title $index'}
            </DataTable.Title>
         ))}
      </View>
   )
}

export default TableTitle

const styles = StyleSheet.create({
   headerTextTable: {
      color: 'black',
   },
})

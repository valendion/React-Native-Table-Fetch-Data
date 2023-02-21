import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import {DataTable} from 'react-native-paper'
import {users} from '../constans/constans'
import TableTitle from './TableTitle'

const TabelComponent = () => (
   <View style={style.container}>
      <DataTable>
         <DataTable.Header style={style.headerBorder}>
            <TableTitle />
         </DataTable.Header>

         <DataTableRow />
      </DataTable>
   </View>
)

const DataTableRow = () => {
   return (
      <View>
         {users.map(dataRow => (
            <DataTable.Row key={dataRow['user_id']} style={style.headerBorder}>
               <DataTable.Cell>{dataRow['user_id']}</DataTable.Cell>
               <DataTable.Cell>{dataRow['name']}</DataTable.Cell>
               <DataTable.Cell>{dataRow['pay_id']}</DataTable.Cell>
               <DataTable.Cell>{dataRow['status'].toString()}</DataTable.Cell>
            </DataTable.Row>
         ))}
      </View>
   )
}

const style = StyleSheet.create({
   container: {
      paddingTop: 100,
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: 30,
   },

   headerBorder: {
      borderColor: 'black',
      borderWidth: 1,
      borderBottomColor: 'black',
   },
})

export default TabelComponent

import {View, StyleSheet} from 'react-native'
import React, {useEffect} from 'react'
import {DataTable} from 'react-native-paper'
import {titleTable, users} from '../constans/constans'
import {observer} from 'mobx-react'
import userPaymentStore from '../store/UserPaymentStore'
import {ResponseUserPayment} from '../model/ResponseUserPayment'

const TabelComponent = observer(() => {
   useEffect(() => {
      userPaymentStore.getUserPayment
   })
   return (
      <View style={style.container}>
         <DataTable>
            <DataTable.Header style={style.headerBorder}>
               {titleTable.map((value, index) => (
                  <DataTable.Title key={index}>{value}</DataTable.Title>
               ))}
            </DataTable.Header>

            <DataTableRow
               response={userPaymentStore.responseUserPayment.response}
            />
         </DataTable>
      </View>
   )
})

const DataTableRow = (resposeUserPayment: ResponseUserPayment) => {
   return (
      <View>
         {resposeUserPayment.response.map(dataRow => (
            <DataTable.Row key={dataRow.user_id} style={style.headerBorder}>
               <DataTable.Cell>{dataRow.user_id}</DataTable.Cell>
               <DataTable.Cell>{dataRow.name}</DataTable.Cell>
               <DataTable.Cell>{dataRow.pay_id}</DataTable.Cell>
               <DataTable.Cell>{dataRow.status}</DataTable.Cell>
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

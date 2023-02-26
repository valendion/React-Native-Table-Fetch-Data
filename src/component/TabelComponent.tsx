import {View, StyleSheet} from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import {DataTable} from 'react-native-paper'
import {titleTable} from '../constans/constans'
import {observer} from 'mobx-react'

import {ResponseUserPayment} from '../model/ResponseUserPayment'
import {RootStoreContext} from '../store/UserPaymentStore'
import {ResponseUser} from '../model/ResponseUser'

const TabelComponent = observer(() => {
   const {userPaymentStore} = useContext(RootStoreContext)
   const [isShowTableShow, setIsShowTableShow] = useState(false)
   useEffect(() => {
      userPaymentStore.getUserPayment()
   })
   return (
      <View style={style.container}>
         <DataTable>
            <DataTable.Header style={style.headerBorder}>
               {titleTable.map((value, index) => (
                  <DataTable.Title key={index}>{value}</DataTable.Title>
               ))}
            </DataTable.Header>

            {userPaymentStore.responseUser.data ? (
               <DataTableRow data={userPaymentStore.responseUser} />
            ) : null}
         </DataTable>
      </View>
   )
})

const DataTableRow = (props: {data: ResponseUser}) => {
   return (
      <View>
         {props.data.data.map((dataRow, index) => (
            <DataTable.Row key={index} style={style.headerBorder}>
               <DataTable.Cell>{dataRow.id}</DataTable.Cell>
               <DataTable.Cell>{dataRow.email}</DataTable.Cell>
               <DataTable.Cell>{`${dataRow.first_name} ${dataRow.last_name}`}</DataTable.Cell>
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

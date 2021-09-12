import * as React from 'react';
import { View, Text } from 'react-native';
import { DataTable, List, FAB } from 'react-native-paper';

const optionsPerPage = [2, 3, 4];



const MyComponent = () => {
  const [page, setPage] = React.useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[2]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  interface titleProps {
    data: string,
    lancamento: string,
    tipo: string,
    oft: string,
    valor: string,
    option: any,
  }

  interface menuProps {
    data: string,
    lancamento: string,
    tipo: string,
    oft: string,
    valor: string,
    option: any,
  }

  const titleTable: titleProps[] = [
    {
      data: 'Data',
      lancamento: 'Lançto',
      tipo: 'Tipo de culto',
      oft: 'OFT',
      valor: 'Valor T',
      option: 'Opções',
    },
  ]
  const menus: menuProps[] = [
    {
      data: '12/09/2021',
      lancamento: '393625',
      tipo: 'RJM',
      oft: '171,00',
      valor: '171,00',
      option: 'any',
    },
    {
      data: '12/09/2021',
      lancamento: '393625',
      tipo: 'RJM',
      oft: '171,00',
      valor: '171,00',
      option: 'Opções',
    },
    {
      data: '12/09/2021',
      lancamento: '393625',
      tipo: 'RJM',
      oft: '171,00',
      valor: '171,00',
      option: 'Opções',
    },
  ];

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  const opts = () =>{

    <List.AccordionGroup>
    <List.Accordion title="Accordion 1" id="1">
      <List.Item title="Item 1" />
    </List.Accordion>
    <List.Accordion title="Accordion 2" id="2">
      <List.Item title="Item 2" />
    </List.Accordion>
    <View>
      <Text>
        List.Accordion can be wrapped because implementation uses React.Context.
      </Text>
      <List.Accordion title="Accordion 3" id="3">
        <List.Item title="Item 3" />
      </List.Accordion>
    </View>
  </List.AccordionGroup>
  }

  return (
    
    <DataTable>
      {
        titleTable.map(({ data, lancamento, tipo, oft, valor, option }: menuProps) => {
          return (
            <DataTable.Header>
              <DataTable.Title>{data}</DataTable.Title>
              <DataTable.Title>{lancamento}</DataTable.Title>
              <DataTable.Title>{tipo}</DataTable.Title>
              <DataTable.Title>{oft}</DataTable.Title>
              <DataTable.Title>{valor}</DataTable.Title>
              <DataTable.Title>{option}</DataTable.Title>
            </DataTable.Header>
          );
        })
      }
      {
        menus.map(({ data, lancamento, tipo, oft, valor, option }: menuProps) => {
          return (
            <DataTable.Row>
              <DataTable.Cell>{data}</DataTable.Cell>
              <DataTable.Cell>{lancamento}</DataTable.Cell>
              <DataTable.Cell>{tipo}</DataTable.Cell>
              <DataTable.Cell>{oft}</DataTable.Cell>
              <DataTable.Cell>{valor}</DataTable.Cell>
              <DataTable.Cell>
              <FAB
                style={{
                  position: 'absolute',
                  margin: 6,
                  right: 2,
                  bottom: 0,
                }}
                small
                icon="plus"
                onPress={opts}
              />
              </DataTable.Cell>
              {/* <DataTable.Cell numeric>6.0</DataTable.Cell> */}
            </DataTable.Row>
          );
        })
      }


      <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      />
    </DataTable>
  );
}

export default MyComponent;
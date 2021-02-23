<style>
table, td, th{
border:1px solid #000;
}
</style>
<template>
<div>
<table>
  <thead>
    <tr>
      <th>日期</th>
      <th>利息总收入</th>
      <th>资金池</th>
            <th>业务笔数</th>
            <th>资金池收入</th>
      <th>业务名</th>
      <th>金额</th>
      <th>客户经理</th>


      <th>负责人</th>
    </tr>
  </thead>
  <tbody v-for='v, i in data'>
    <tr v-for='v2,i2 in v.list'>
      <td v-if='v2.isFirst' :rowspan="v.count">{{v.date}}</td>
      <td v-if='v2.isFirst' :rowspan="v.count">{{v.day_income_count}}</td>
      <td v-if='v2.count' :rowspan="v2.count">{{v2.capital_pool_name}}</td>
      <td v-if='v2.count' :rowspan="v2.count">{{v2.count}}</td>
      <td v-if='v2.count' :rowspan="v2.count">{{v2.moneys}}</td>
      <td>{{v2.bond_name}}</td>
      <td>{{v2.loan_amount}}</td>
      <td>{{v2.capital_pool_manager}}</td>
      <td>{{v2.creartor_name}}</td>
    </tr>
  </tbody>
</table>
<pre>
{{JSON.stringify(data, null, '\t')}}
</pre>
</div>
</template>

<script>
function parse(data){
  data.forEach(v => {
    const list = [];
    let len = 0;
    v.capital_pool_data.forEach((v2, i) => {
      const list2 = v2.bond_data;
      const len2 = list2.length;
      if(len2){
        let firstV = list2[0], moneys = 0;
        if(!len){
          firstV.isFirst = true;
        }
        list2.forEach(v3 => {
          moneys += v3.loan_amount;
          list.push(v3);
        })
        firstV.count = len2;
        firstV.moneys = moneys;
        firstV.capital_pool_name = v2.capital_pool_name;
        firstV.capital_pool_manager = v2.capital_pool_manager;
        len += len2;
      }
    })
    delete(v.capital_pool_data);
    v.list = list;
    v.count = len;
  });
  return data;
}
export default {
  data(){
    const data = [
    {
    "date": "2017-12-23",
    "day_income_count": "5000",
    "capital_pool_data":
    [
    {
    "capital_pool_name": "第一业务部",
    "bond_data": [
    {
    "bond_name": "哇哈哈111",
    "loan_amount": 123456,
    "creartor_name": "张三",
    },
    {
    "bond_name": "哇哈哈222",
    "loan_amount": 123456,
    "creartor_name": "张三",
    },
    {
    "bond_name": "哇哈哈333",
    "loan_amount": 123456,
    "creartor_name": "张三",
    },
    ],
    "bond_count": 3,
    "capital_pool_income_count": 2345,
    "capital_pool_manager": ["sdfsdf"]
    },
    {
    "capital_pool_name": "第 2 业务部",
    "bond_data": [
    {
    "bond_name": "哇哈哈111",
    "loan_amount": 123456,
    "creartor_name": "张三",
    },
    ],
    "bond_count": 1,
    "capital_pool_income_count": 2345,
    "capital_pool_manager": []
    },
    ]
    },
    {
    "date": "2017-12-24",
    "day_income_count": "5000",
    "capital_pool_data":
    [
    {
    "capital_pool_name": "第一业务部",
    "bond_data": [
    {
    "bond_name": "哇哈哈111",
    "loan_amount": 123456,
    "creartor_name": "张三",
    },
    {
    "bond_name": "哇哈哈222",
    "loan_amount": 123456,
    "creartor_name": "张三",
    },
    {
    "bond_name": "哇哈哈333",
    "loan_amount": 123456,
    "creartor_name": "张三",
    },
    ],
    "bond_count": 3,
    "capital_pool_income_count": 2345,
    "capital_pool_manager": []
    },
    ]
    }
    ]
    return {
      data: parse(data)
    }
  }
}
</script>

// const userInput = {
//   航班号: '2566',
//   起飞站: 'CAN',
//   姓名: 'zeng',
//   到达站: 'CAN',
//   岗位: '空管',
//   资质: '没资质',
// }

const inputData = {
  employeeNum: '2566',
  name: 'zeng',
  portB: 'CAN',
  post: '空管',
  // portA: 'CAN',
  // certification: '没资质',
}

const rulesList = [
  {
    id: 1720596036253,
    type: 'or',
    list: [
      {
        id: 1720596046702,
        ids: [1720596046702],
        variateLabel: '航班号',
        variate: 'fltNum',
        inputVal: '6666',
      },
      {
        id: 1720598600144,
        ids: [1720598600144],
        type: 'or',
        list: [
          {
            id: 1720598601407,
            ids: [1720598600144, 1720598601407],
            variateLabel: '资质',
            variate: 'certification',
            inputVal: '没资质',
          },
          {
            id: 1720679006685,
            ids: [1720598600144, 1720679006685],
            variateLabel: '航班号',
            variate: 'fltNum',
            inputVal: '7777',
          },
        ],
      },
      {
        id: 1720765261266,
        ids: [1720765261266],
        type: 'and',
        list: [
          {
            id: 1720765263683,
            ids: [1720765261266, 1720765263683],
            variateLabel: '人工号',
            variate: 'employeeNum',
            inputVal: '2566',
          },
          {
            id: 1720765265024,
            ids: [1720765261266, 1720765265024],
            variateLabel: '岗位',
            variate: 'post',
            inputVal: '空管',
          },
        ],
      },
      {
        id: 1720596057847,
        ids: [1720596057847],
        type: 'and',
        list: [
          {
            id: 1720596062003,
            ids: [1720596057847, 1720596062003],
            type: 'or',
            list: [
              {
                id: 1720596066296,
                ids: [1720596057847, 1720596062003, 1720596066296],
                variateLabel: '到达站',
                variate: 'portB',
                inputVal: 'CAN',
              },
              {
                id: 1720598125027,
                ids: [1720596057847, 1720596062003, 1720598125027],
                variateLabel: '岗位',
                variate: 'post',
                inputVal: '地勤',
              },
            ],
          },
          {
            id: 1720596063629,
            ids: [1720596057847, 1720596063629],
            variateLabel: '姓名',
            variate: 'name',
            inputVal: 'zeng',
          },
        ],
      },
    ],
  },
]

function findMatchingIds(rules, userInput) {
  // 定义一个内部函数来评估单个条件是否与用户输入匹配
  function evaluateCondition(condition, input) {
    // 检查条件中的变量是否存在于用户输入中，并且值是否相等
    return condition.variate in input && input[condition.variate] === condition.inputVal
  }

  // 定义一个内部函数来遍历列表，并收集匹配的项ID
  function traverseList(list, input, result = []) {
    // 遍历列表中的每个项
    for (const item of list) {
      // 如果项包含嵌套列表（表示组合条件），则递归调用traverseList
      if ('list' in item) {
        const nestedResult = traverseList(item.list, input, []) // 递归遍历嵌套列表

        // 处理嵌套条件
        if (nestedResult.length > 0) {
          if (item.type === 'or' && nestedResult.length > 0) {
            // 对于'or'，只要有一个嵌套项匹配就足够
            result.push(...nestedResult)
          } else if (item.type === 'and' && nestedResult.length === item.list.length) {
            // 对于'and'，所有嵌套项都必须匹配
            result.push(...nestedResult)
          }
        }
      } else {
        // 处理非嵌套条件
        // 如果当前项的条件与用户输入匹配，则将其ID添加到结果中
        // eslint-disable-next-line no-lonely-if
        if (evaluateCondition(item, input)) {
          result.push(item.id)
        }
      }
    }
    // 返回匹配项ID列表
    return result
  }

  function findIdsInRules(rulesData, input) {
    let result = []
    for (const ruleSet of rulesData) {
      if (ruleSet.list) {
        const idsFromThisSet = traverseList(ruleSet.list, input, []) // 遍历当前规则集的list并收集匹配的ID
        result = result.concat(idsFromThisSet) // 将当前规则集的匹配ID添加到结果中
      }
    }
    return result
  }

  return findIdsInRules(rules, userInput)
}

export { findMatchingIds, inputData, rulesList }

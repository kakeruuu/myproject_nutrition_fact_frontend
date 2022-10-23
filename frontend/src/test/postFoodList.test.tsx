import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import { readFoodList } from '../components/api/postFoodList'

// Testing Trophyの考えに基づくとこのテストは書いてはいけない？
// →ユーザーから見えない部分だから
test('postFoodListによってpostに正しい値が代入されるかどうか' ,() => {
    const [post, setPost] = useState<any[]>([])
    const query = {query: "にんじん,砂糖"}

})
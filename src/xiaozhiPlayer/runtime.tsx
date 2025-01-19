import React, { useCallback, useEffect, useMemo, useState } from "react";
import { View } from "@tarojs/components";

// 添加类型声明
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'xzb-video': any
    }
  }
}

export default function ({ env, data, inputs, outputs }) {
  // 处理视频加载完成的回调
  const handleVideoLoaded = useCallback((e) => {
    console.log('视频加载完成', e);
  }, []);

  // 处理视频加载成功的回调
  const handleVideoSuccess = useCallback((e) => {
    console.log('视频加载成功', e);
  }, []);

  // 处理视频加载失败的回调
  const handleVideoFailed = useCallback((e) => {
    const errorCode = e.detail.ret;
    console.log('视频加载失败，错误码：', errorCode);
  }, []);

  return (
    <xzb-video
      style={{ width: '100%', height: '100%' }}
      src="https://res.chanjing.cc/chanjing/dp/output/2025-01-12/1736677466900-83693b34f0f455d912037fa25af41b60daf1ddb9-video.mp4"
      onVideoloaded={handleVideoLoaded}
      onVideosuccess={handleVideoSuccess}
      onVideofailed={handleVideoFailed}
    />
  );
}
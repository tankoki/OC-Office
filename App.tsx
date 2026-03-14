import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [status, setStatus] = useState('连接中... 📡');
  const [agents, setAgents] = useState([
    { id: 'main', model: 'Gemini 3.1 Pro', status: '摸鱼中 🐟' },
    { id: '前端开发马仔', model: 'DeepSeek', status: '疯狂掉头发 🤯' },
    { id: '资料搜集员', model: 'MiniMax', status: '休假中 🏖️' },
  ]);

  useEffect(() => {
    // 模拟连接 OpenClaw (因为你是 password 模式，直接用配置里的 'tankokis' 就可以啦，无需 token 命令！)
    setTimeout(() => {
      setStatus('已连接到猫爪系统 🟢');
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>😼 猫爪职介所 (OC Office)</Text>
      <View style={status.includes('已连接') ? styles.statusBadgeGreen : styles.statusBadge}>
        <Text style={styles.statusText}>{status}</Text>
      </View>

      <Text style={styles.sectionTitle}>当前雇员 (Agents)</Text>
      <ScrollView style={styles.list}>
        {agents.map((agent, idx) => (
          <View key={idx} style={styles.card}>
            <View>
              <Text style={styles.agentName}>🏷️ {agent.id}</Text>
              <Text style={styles.agentModel}>🧠 模型: {agent.model}</Text>
              <Text style={styles.agentStatus}>状态: {agent.status}</Text>
            </View>
            <View style={styles.btnGroup}>
              <TouchableOpacity style={styles.actionBtn}>
                <Text style={styles.actionBtnText}>唤醒 ⚡</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionBtn, styles.dangerBtn]}>
                <Text style={styles.actionBtnText}>开除 💣</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.addBtnText}>+ 招募新马仔 (新建 Agent)</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F9',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  statusBadge: {
    backgroundColor: '#E5F1FF',
    padding: 10,
    borderRadius: 8,
    marginBottom: 30,
  },
  statusBadgeGreen: {
    backgroundColor: '#E8F5E9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 30,
  },
  statusText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#444',
  },
  list: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  agentName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  agentModel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  agentStatus: {
    fontSize: 14,
    color: '#FF9500',
    fontWeight: '500',
  },
  btnGroup: {
    flexDirection: 'column',
    gap: 10,
  },
  actionBtn: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 6,
    alignItems: 'center',
  },
  dangerBtn: {
    backgroundColor: '#FF3B30',
  },
  actionBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  addBtn: {
    backgroundColor: '#34C759',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 20,
  },
  addBtnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

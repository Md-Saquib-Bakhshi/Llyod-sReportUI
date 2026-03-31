import { useEffect, useState } from "react"

export default function Logs(){

  const [logs, setLogs] = useState([])
  const [search, setSearch] = useState("")
  const [serviceFilter, setServiceFilter] = useState("all")

  useEffect(() => {
    fetchLogs()
  }, [])

  const fetchLogs = async () => {
    const res = await fetch("http://localhost:8003/logs")
    const data = await res.json()
    setLogs(data)
  }

  // ✅ FILTER
  const filteredLogs = logs.filter(log => {

    const text = `${log.service_name} ${log.status} ${log.mail_status}`.toLowerCase()

    if (search && !text.includes(search.toLowerCase()))
      return false

    if (serviceFilter !== "all" && log.service_name !== serviceFilter)
      return false

    return true
  })

  return (

    <div style={container}>

      <h2 style={{ marginBottom: "20px" }}>📊 Logs Dashboard</h2>

      <div style={card}>

        {/* 🔍 SEARCH + FILTER */}
        <div style={filterRow}>

          <input
            type="text"
            placeholder="🔍 Search logs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={searchBox}
          />

          <div style={chipContainer}>
            {[
              { key: "all", label: "All" },
              { key: "factsheet_validation", label: "Factsheet" },
              { key: "report12", label: "Report12" },
              { key: "report923", label: "Report923" }
            ].map(item => (
              <button
                key={item.key}
                onClick={() => setServiceFilter(item.key)}
                style={{
                  ...chip,
                  background: serviceFilter === item.key ? "#4CAF50" : "#eee",
                  color: serviceFilter === item.key ? "white" : "#333"
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

        </div>

        {/* 📋 TABLE */}
        <table style={table}>

          <thead>
            <tr style={theadRow}>
              <th style={th}>Service</th>
              <th style={th}>Status</th>
              <th style={th}>Mail</th>
              <th style={th}>Time</th>
            </tr>
          </thead>

          <tbody>

            {filteredLogs.length === 0 && (
              <tr>
                <td colSpan="4" style={{ padding: "20px", textAlign: "center" }}>
                  No logs found
                </td>
              </tr>
            )}

            {filteredLogs.map((log, index) => (

              <tr key={index} style={row}>

                {/* SERVICE */}
                <td style={{
                  ...td,
                  fontWeight: "bold",
                  color: getServiceColor(log.service_name)
                }}>
                  {formatServiceName(log.service_name)}
                </td>

                {/* STATUS */}
                <td style={td}>
                  <span style={getStatusBadge(log.status)}>
                    {log.status}
                  </span>
                </td>

                {/* MAIL */}
                <td style={td}>
                  <span style={getMailBadge(log.mail_status)}>
                    {log.mail_status}
                  </span>
                </td>

                {/* TIME */}
                <td style={td}>{log.created_at}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}

//////////////////////////////////////////////
// 🎨 STYLES
//////////////////////////////////////////////

const container = {
  padding: "30px",
  background: "#f5f7fb",
  minHeight: "100vh"
}

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
}

const filterRow = {
  display: "flex",
  gap: "10px",
  marginBottom: "20px",
  flexWrap: "wrap"
}

const searchBox = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  flex: 1
}

const chipContainer = {
  display: "flex",
  gap: "8px",
  flexWrap: "wrap"
}

const chip = {
  padding: "8px 14px",
  borderRadius: "20px",
  border: "none",
  cursor: "pointer",
  fontWeight: "500",
  transition: "0.2s"
}

const table = {
  width: "100%",
  borderCollapse: "collapse"
}

const theadRow = {
  background: "#f0f2f5"
}

const th = {
  padding: "12px",
  textAlign: "left",
  fontWeight: "600"
}

const td = {
  padding: "12px"
}

const row = {
  borderBottom: "1px solid #eee",
  transition: "0.2s"
}

//////////////////////////////////////////////
// 🎯 HELPERS
//////////////////////////////////////////////

const getServiceColor = (service) => {
  if (service === "factsheet_validation") return "#4CAF50"
  if (service === "report12") return "#2196F3"
  if (service === "report923") return "#9C27B0"
  return "#333"
}

const formatServiceName = (service) => {
  if (service === "factsheet_validation") return "Factsheet"
  if (service === "report12") return "Report12"
  if (service === "report923") return "Report923"
  return service
}

const getStatusBadge = (status) => ({
  padding: "4px 10px",
  borderRadius: "10px",
  background: status === "completed" ? "#e8f5e9" : "#ffebee",
  color: status === "completed" ? "#2e7d32" : "#c62828",
  fontWeight: "600"
})

const getMailBadge = (status) => ({
  padding: "4px 10px",
  borderRadius: "10px",
  background: status === "Sent" ? "#e3f2fd" : "#fff3e0",
  color: status === "Sent" ? "#1565c0" : "#ef6c00",
  fontWeight: "600"
})